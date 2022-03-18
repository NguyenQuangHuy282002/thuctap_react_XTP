import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
Todo.propTypes = {};

function Todo(props) {
  return (
    <div className="Todo">
      <div>Todos</div>
      <div className="todo__add">
        <div className="header">
          Add a task
        </div>

        <div className="body">
          <h4>Item</h4>

          <form>
            <input type="search" required class="form-control" placeholder="What do you want to do?">
            </input>
          </form>

          <p>Enter what you want</p>

          <a href="" className="btn btn-primary">Submit</a>

        </div>
      </div>
      <div className="todo__task">
        <div className="header">
          Tasks
        </div>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Buy Benz</td>
              <td>Not completed</td>
              <td>
                <a href="" className="btn btn-primary">Complete</a>
                <a href="" className="btn btn-danger">Delete</a>
              </td>
            </tr>

            <tr>
              <td>Buy Benz</td>
              <td>Not completed</td>
              <td>
                <a href="" className="btn btn-primary">Complete</a>
                <a href="" className="btn btn-danger">Delete</a>
              </td>
            </tr>

            <tr>
              <td>Buy Benz</td>
              <td>Not completed</td>
              <td>
                <a href="" className="btn btn-primary">Complete</a>
                <a href="" className="btn btn-danger">Delete</a>
              </td>
            </tr>

            <tr>
              <td>Buy Benz</td>
              <td>Not completed</td>
              <td>
                <a href="" className="btn btn-primary">Complete</a>
                <a href="" className="btn btn-danger">Delete</a>
              </td>
            </tr>

            <tr>
              <td>Buy Benz</td>
              <td>Not completed</td>
              <td>
                <a href="" className="btn btn-primary">Complete</a>
                <a href="" className="btn btn-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
