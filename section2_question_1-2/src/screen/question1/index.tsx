import React from "react";
import "./style.css";
import { isPrime, checkFibonacci } from "../../helper/util";

enum CalulateMethod {
  prime = "prime",
  fibanacci = "fibanacci",
}
interface State {
  input: string;
  calculateMethod: CalulateMethod;
  answer: string;
}

class Question1 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      input: "",
      calculateMethod: CalulateMethod.prime,
      answer: "",
    };
  }

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (value && value.trim()) {
      if (parseInt(value) < 0) {
        this.setState({ input: "1" });
      } else {
        this.setState(
          {
            input: value,
          },
          () => {
            this.calculate();
          }
        );
      }
    } else {
      this.setState({
        input: value,
        answer: "",
      });
    }
  };

  onChangecalculateMethod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CalulateMethod;

    this.setState(
      {
        calculateMethod: value,
      },
      () => {
        this.calculate();
      }
    );
  };

  calculate = () => {
    const value = parseInt(this.state.input);
    if (this.state.calculateMethod == CalulateMethod.prime) {
      const validPrime = isPrime(value);
      if (validPrime) {
        this.setState({ answer: "true" });
      } else {
        this.setState({ answer: "false" });
      }
    } else {
      const validPrime = checkFibonacci(value);
      if (validPrime) {
        this.setState({ answer: "true" });
      } else {
        this.setState({ answer: "false" });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Question 1</h1>
        <div style={{ overflowX: "scroll" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ height: "300px", verticalAlign: "top" }}>
                <td style={{ width: "200px", minWidth: "200px" }}>
                  <input
                    type="text"
                    value={this.state.input}
                    onChange={this.onChangeInput}
                  />
                </td>
                <td style={{ minWidth: 100 }}>
                  <select
                    id="calculateMethod"
                    defaultValue={this.state.calculateMethod}
                    onChange={this.onChangecalculateMethod}
                  >
                    <option value={CalulateMethod.prime}>isPrime</option>
                    <option value={CalulateMethod.fibanacci}>
                      IsFibanacci
                    </option>
                  </select>
                </td>
                <td style={{ width: "300px", minWidth: "300px" }}>
                  <p>{this.state.answer}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Question1;
