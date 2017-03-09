
import './commentList.css'
import React, {PropTypes} from 'react'
import CommentItem from '../CommentItem'


class CommentList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {comments , remove} = this.props
    let display = comments.length > 0 ? 'none' : 'block'
    let submission= comments.map((item,index)=>{
        const listItems= {
            key:index,
            index,
            remove,
            item
        }
        return <CommentItem {...listItems}/>
    })
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {submission}
        </ul>
      </div>
    );
  }
}
CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired,
  remove: React.PropTypes.func.isRequired
};

export default CommentList