import React, {Component} from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {getCategories} from '../store/allCategories'

class AllCategories extends Component {
  componentDidMount() {
    this.props.loadCategories()
  }
  render() {
    const {categories} = this.props
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
      }
    }))
    return (
      <div>
        {categories.map(category => {
          return (
            <div className={classes.root} key={category.id}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    {' '}
                    <h4>{category.name}</h4>
                    <div>{category.color}</div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    categories: state.allCategories
  }
}

const mapDispatch = dispatch => {
  return {
    loadCategories: () => dispatch(getCategories())
  }
}

export default connect(mapState, mapDispatch)(AllCategories)
