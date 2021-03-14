import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux'
import {getCategories} from '../store/allCategories'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

class AllCategories extends React.Component {
  componentDidMount() {
    this.props.loadCategories()
  }

  render() {
    const classes = useStyles()
    const categories = this.props.categories
    return (
      <div>
        {categories.map(category => {
          return (
            <div className={classes.root} key={category.id}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>xs=12</Paper>
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
    categories: state.allCategory
  }
}

const mapDispatch = dispatch => {
  return {
    loadCategories: () => dispatch(getCategories())
  }
}

export default connect(mapState, mapDispatch)(AllCategories)
