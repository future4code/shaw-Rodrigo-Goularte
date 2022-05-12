import styled from "styled-components"

//Styled FeedPage

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const PostTitle = styled.input`
  width: 100%;
  padding: 18px;
  margin-bottom: 18px;

  color: #6F6F6F;
  font-size: 18px;

  background-color: #EDEDED;
  border: none;
  border-radius: 12px;
`

export const Post = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 18px;
  resize: none;

  color: #6F6F6F;
  font-size: 18px;

  background-color: #EDEDED;
  border: none;
  border-radius: 12px;
`