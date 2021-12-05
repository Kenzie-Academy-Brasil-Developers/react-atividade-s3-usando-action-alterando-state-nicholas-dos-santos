import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => dispatch(changeName(inputName));

  return (
    <div>
      <h2>User Name: {user.name}</h2>
      <input type="text" onChange={(e) => setInputName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
