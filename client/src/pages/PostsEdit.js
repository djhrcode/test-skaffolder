// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import PostsActions from "../redux/actions/PostsActions";

// END IMPORT ACTIONS

/** APIs

* actionsPosts.create
*	@description CRUD ACTION create
*
* actionsPosts.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsPosts.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class PostsEdit extends Component {
  // Init posts
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPosts.loadPosts(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
  }

  // Insert props posts in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      posts: props.posts
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.posts._id) {
      this.props.actionsPosts.savePosts(this.state.posts).then(data => {
        this.props.history.push("/postses/");
      });
    } else {
      this.props.actionsPosts.createPosts(this.state.posts).then(data => {
        this.props.history.push("/postses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Posts Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="description"
            label="Description"
            value={this.state.posts.description || ""}
            onChange={Utils.handleChange.bind(this, "posts")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.posts.description && this.state.posts.description === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="image"
            label="Image"
            value={this.state.posts.image || ""}
            onChange={Utils.handleChange.bind(this, "posts")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.posts.image && this.state.posts.image === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.posts.name || ""}
            onChange={Utils.handleChange.bind(this, "posts")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.posts.name && this.state.posts.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m id_user with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="id_user">
              Id_user
            </InputLabel>
            <Select
              value={this.state.posts.id_user || ""}
              onChange={Utils.handleChangeSelect.bind(this, "posts")}
              inputProps={{
                id: "id_user",
                name: "id_user"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/postses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPosts: bindActionCreators(PostsActions, dispatch),
  };
};

// Validate types
PostsEdit.propTypes = { 
  actionsPosts: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    posts: state.PostsEditReducer.posts,
    listUser: state.PostsEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsEdit);
