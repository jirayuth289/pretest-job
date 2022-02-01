import React from "react";
import "./style.css";
import { isPrime, checkFibonacci } from "../../helper/util";

interface State {
  keyword: string;
  categories: any[];
}

class Question1 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      keyword: "",
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onChangeKeyword = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    this.setState({
      keyword: value,
    });

    if (value.trim()) {
      await this.fetchCategories();

      const filterCategories = this.state.categories.reduce(
        (preCategories, currentCategory) => {
          const regex = new RegExp(value, "gi");
          if (currentCategory.match(regex)) {
            preCategories.push(currentCategory);
          }
          return preCategories;
        },
        []
      );

      this.setState({
        categories: filterCategories,
      });
    } else {
      this.fetchCategories();
    }
  };

  fetchCategories = async () => {
    const requestOptions = {
      method: "GET",
    };

    const response = await fetch(
      "https://api.publicapis.org/categories",
      requestOptions
    );

    if (response.status >= 300) {
    } else {
      const data = await response.json();
      this.setState({ categories: data.categories });
    }
  };

  render() {
    return (
      <div>
        <h1>Question 2</h1>
        Filter:{" "}
        <input
          type="text"
          value={this.state.keyword}
          onChange={this.onChangeKeyword}
        />
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>
                <b>Categories</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((category) => {
              return (
                <tr key={category}>
                  <td>{category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Question1;
