import React, { Component } from "react";
import axios from "axios";

import CatCard from "../../components/CatCard";
import SearchBar from "../../components/SearchBar";

import "../../css/layout.css";

class Home extends Component {
  state = {
    listCat: [],
    page: 1,
    searchValue: "",
    offset: 10,
    selected: null,
  };

  getDetail = () => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds?limit=${this.state.offset}`)
      .then((result) => {
        this.setState({
          listCat: result.data,
        });
      });
    this.setState({
      offset: this.state.offset + 10,
    });
  };

  handleScroll = (event) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop + 1 >=
      event.target.documentElement.scrollHeight
    ) {
      this.getDetail();
    }
  };

  componentDidMount() {
    this.getDetail();
    window.addEventListener("scroll", this.handleScroll);
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSelected = (i) => {
    if (this.state.selected === i) {
      this.setState({
        selected: null,
      });
    } else {
      this.setState({
        selected: i,
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar search={this.handleSearch} />
        <div className="home">
          {this.state.listCat
            .filter((data) => {
              return this.state.searchValue.toLowerCase() === ""
                ? data
                : data.name.toLowerCase().includes(this.state.searchValue);
            })
            .map((data, i) => {
              return (
                <CatCard
                  key={data.id}
                  data={data}
                  image={data.image}
                  clicked={() => this.handleSelected(i)}
                  selected={this.state.selected}
                  number={i}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
