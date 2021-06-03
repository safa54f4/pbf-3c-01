import React from 'react';
import API from '../services/Komentar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../parts/header'

function DaftarKomentar(props) {
    return (
        <div>
            <h3>{props.nama}</h3>
            <div>{props.isiKomentar}</div>
        </div>
    );
}


export default class KomentarPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataKomentar: [],      // untuk menampung data API
            postKomentar: {
                userId: 1,
                nama: '',
                komentar: ''
            }
        };
    }

    ambilDataDariServerAPI=()=>{
        API.getNewsKomentar().then(result=>{
            this.setState({
                dataKomentar:result
            })
        })
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();

        API.postNewsKomentar(this.state.postKomentar)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil disimpan!');
            });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postKomentar[name] = value;
            return {
                postKomentar: prevState.postKomentar
            };
        });
    }

    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsKomentar(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    render() {
        const { dataKomentar, postKomentar } = this.state;

        return (
            <div class="container">
                <Header />
                <br />
                <div>
                    <form id="contact-form" class="tm-contact-form" onSubmit={this.handleTombolSimpan}>
                        <div class="form-group">
                            <label class="form-label">Judul Komentar: </label>
                            <input class="form-control" type="text" name="nama" defaultValue={postKomentar.nama} onChange={this.handleOnChange} />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Isi Komentar: </label>
                            <textarea class="form-control" type="text" name="komentar" defaultValue={postKomentar.komentar} onChange={this.handleOnChange} />
                        </div>
                        <Button variant="success" type="submit" value="Simpan">Simpan</Button>
                    </form>
                </div>
                <hr></hr>
                <h2>Daftar Komentar</h2>
                <hr></hr>
                {
                    dataKomentar.map(komentar=>{
                        return (
                            <div key={komentar.id}>
                                <DaftarKomentar nama={komentar.nama} isiKomentar={komentar.komentar} />
                                <Button variant="danger" value={komentar.id} onClick={this.handleTombolHapus}>Hapus</Button>
                                <hr></hr>
                            </div>)

                    })
                }
            </div>
        );
    }
}