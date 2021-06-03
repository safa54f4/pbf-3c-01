import React from "react";
import API from "../services/Komentar";
import { Button } from "react-bootstrap";

function DaftarKomentar(props) {
  return (
    <div>
      <h3>{props.nama}</h3>
      <div>{props.isiKomentar}</div>
    </div>
  );
}
export default class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomentar: [],
      postKomentar: {
        userId: 1,
        nama: "",
        komentar: "",
      }, // untuk menampung data API
    };
  }
  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsComment(this.state.postKomentar).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
    });
  };
  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postKomentar[name] = value;
      return {
        postKomentar: prevState.postKomentar,
      };
    });
  };
  handleTombolHapus = (e) => {
    e.preventDefault();

    API.deleteNewsComment(e.target.value).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil dihapus!");
    });
  };
  ambilDataDariServerAPI = () => {
    API.getNewsComment().then((result) => {
      this.setState({
        dataKomentar: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataKomentar, postKomentar } = this.state;

    return (
      <div>
        <h2>Komentar</h2>
        <div>
          <form onSubmit={this.handleTombolSimpan}>
            <label>
              Nama:
              <input
                type="text"
                name="nama"
                defaultValue={postKomentar.title}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              Isi Komentar:
              <input
                type="text"
                name="komentar"
                defaultValue={postKomentar.body}
                onChange={this.handleOnChange}
              />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr>

        {dataKomentar.map((comment) => {
          return (
            <div key={comment.id}>
              <DaftarKomentar
                nama={comment.nama}
                isiKomentar={comment.komentar}
              />
              <Button
                variant="danger"
                value={comment.id}
                onClick={this.handleTombolHapus}
              >
                Hapus
              </Button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
