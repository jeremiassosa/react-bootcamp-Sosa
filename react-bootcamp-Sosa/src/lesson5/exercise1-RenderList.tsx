import { useState } from "react";

interface User {
  name: string,
  subName: string
}

function RenderList() {

    const [userNames] = useState<User[]>([
        {name:'Tobias', subName:'Manquez'},
        {name:'Santiago', subName:'Barua'},
        {name:'Giovanni', subName:'LaVolpe'},
        {name:'Mayra', subName:'Cueto'},
      ]);

    return (
        <ul>
        {userNames.map((user) => (
          <li key={user.name}>{user.name} {user.subName}</li>
             ))}
        </ul>

            )
}

export default RenderList