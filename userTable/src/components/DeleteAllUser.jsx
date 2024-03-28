import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import styled from "styled-components";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="btn btn-delete" onClick={deleteAll}>
        Delete All Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DeleteAllUser;
