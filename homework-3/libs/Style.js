export const StyledButton = styled.button`

  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${(props) =>
    props.primary && css`
    color: white;
    background: navy;
    border-color: navy;
  `}
`;

export const StyledInput = styled.button`

  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${(props) =>
    props.primary && css`
    color: white;
    background: navy;
    border-color: navy;
  `}
`;