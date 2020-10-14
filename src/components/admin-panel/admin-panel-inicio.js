import React, { Component } from 'react';

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: '',
      lista: []
    }
  }

  componentDidMount() {
    fetch('https://projeto-pi-digitalhouse.herokuapp.com/' + this.props.tipo)
    .then(response => response.json())
    .then(lista => this.setState({lista: lista}))
  }

  updateState = () => {
    fetch('https://projeto-pi-digitalhouse.herokuapp.com/listaEventos' + this.props.tipo)
    .then(response => response.json())
    .then(lista => this.setState({lista: lista}))
  }

  handleChange = (list) => {
    

    if(list[2] == 'PUT'){
      const stuff = this.state.lista
      stuff[list[0].id - 1].tituloEdit = false
      stuff[list[0].id - 1].dataDeEdit = false
      stuff[list[0].id - 1].dataAteEdit = false
      stuff[list[0].id - 1].descricaoEdit = false
      stuff[list[0].id - 1].imagemEdit = false
      stuff[list[0].id - 1].[list[1]] = this.state.editing
      this.setState({lista: stuff})
      console.log(stuff)

      fetch(`https://projeto-pi-digitalhouse.herokuapp.com/${this.props.tipo}/${list[0].id}`, { 
      method: list[2],
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.lista[list[0].id - 1])
      });
    }else if(list[2] == 'POST'){
      console.log(this.state.lista[list[0].id])
      fetch(`https://projeto-pi-digitalhouse.herokuapp.com/${this.props.tipo}/`, {
      method: list[2],
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list[0])
      }).then(this.updateState)

    }else if(list[2] == 'DELETE'){
      fetch(`https://projeto-pi-digitalhouse.herokuapp.com/${this.props.tipo}/${list[0]}`, {
      method: list[2]}).then(this.updateState)

    }

    console.log(this.state.lista[list[0].id - 1])
  }

  handleEdit = (id, type, content, location) => {

    this.setState({ editing: content})

    if(type == 'enable') {
      const prevEvento = this.state.lista;
      console.log(id)
      console.log(prevEvento)
      prevEvento[id - 1].[location] = true;
      this.setState({ lista: prevEvento 
      })
    }
  }

  render() {
    return(
      <div className="list-div">
      <header className="AdminPanel-config-header">
        <h3>Início</h3>
      </header>
      <section className="AdminPanel-config-section">

      <div className="box-flex">
        <div><span>ID</span></div>
        <div><span>TÍTULO</span></div>
        <div><span>DE</span></div>
        <div><span>ATÉ</span></div>
        <div><span>DESCRIÇÃO</span></div>
        <div><span>IMAGEM</span></div>
      </div>
        {
          this.state.lista.map(({ id, titulo, dataDe, dataAte, descricao, imagem }) => (
            <div key={id} className="box-flex">
              <div>
                <span>{id}</span>
              </div>
              <div>
                <span>{titulo}</span>
                {
                  this.state.lista[id - 1].tituloEdit? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder={"Digite o título"}>{ this.state.editing }</textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'titulo', 'PUT'])}>✓</a></div> : <a onClick={() => this.handleEdit(id, 'enable', titulo, 'tituloEdit') }>⚙</a>
                } 
              </div>
              <div>
                <span>{dataDe}</span>
                {
                  this.state.lista[id - 1].dataDeEdit? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder={"Digite a data de"}>{ this.state.editing }</textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'dataDe', 'PUT'])}>✓</a></div> : <a onClick={() => this.handleEdit(id, 'enable', dataDe, 'dataDeEdit') }>⚙</a>
                } 
              </div>
              <div>
                <span>{dataAte}</span>
                {
                  this.state.lista[id - 1].dataAteEdit? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder={"Digite a data Até"}>{ this.state.editing }</textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'dataAte', 'PUT'])}>✓</a></div> : <a onClick={() => this.handleEdit(id, 'enable', dataAte, 'dataAteEdit') }>⚙</a>
                } 
              </div>
              <div key={id}>
                <span>{descricao}</span>
                {
                  //<a onClick={() => this.handleChange(this.state.lista[id - 1])}>⚙</a>
                }
                
                {
                  //this.state.edit.description? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder="Digite a descrição"></textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'descricao', 'PUT'])}>✓</a></div> : <a onClick={() => this.setState({ edit: { description: true } })}>⚙</a>
                } 

                {
                  this.state.lista[id - 1].descricaoEdit? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder={"Digite a descrição"}>{ this.state.editing }</textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'descricao', 'PUT'])}>✓</a></div> : <a onClick={() => this.handleEdit(id, 'enable', descricao, 'descricaoEdit') }>⚙</a>
                }               

              </div>
              <div> 
                <span><img src={imagem} alt="imagem" width="200px"/></span>
                <a className="delete-icon" onClick={() => this.handleChange([id, '', 'DELETE'])} >🗑</a>
                {
                  this.state.lista[id - 1].imagemEdit? <div><textarea onChange={e => this.setState({ editing: e.target.value })} placeholder={"Digite a URL da imagem"}>{ this.state.editing }</textarea> <a onClick={() => this.handleChange([this.state.lista[id - 1], 'imagem', 'PUT'])}>✓</a></div> : <a onClick={() => this.handleEdit(id, 'enable', imagem, 'imagemEdit') }>⚙</a>
                }  
              </div>
            </div>
          ))
        }

        <a onClick={() => this.handleChange([{ 'titulo': 'novo evento', 'dataDe':'00 MMM', 'dataAte': '00 MMM', 'descricao':'descrição do evento', 'imagem': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROo0xS5S-uGRJBCQM_zkY9BA3IVQT4AdgdGA&usqp=CAU', "tituloEdit": false, "dataDeEdit": false,	"dataAteEdit": false,"descricaoEdit": false, "imagemEdit": false }, 'descricao', 'POST'])}>Add Evento</a>
      </section>
    </div>
    )
  }
}

export default Editor;