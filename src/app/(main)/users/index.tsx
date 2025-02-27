import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ListUsers = () => {
  const [users, setUsers] = useState<any[] | null>([]);

  useEffect(() => {
    const getUsers = async () => {
      let { data } = await supabase.from("profiles").select("*");
      console.log(data);
      setUsers(data);
    };
    getUsers();

    // unmout
    return () => {
      setUsers(null);
    };
  }, []);

  return (
    <View>
      <Text>Users List</Text>
      {users &&
        users.map((user) => (
          <Text key={user.id}>{user.name}</Text>
        ))}

      {users?.length === 0 && <Text>No users found</Text>}
    </View>
  );
};

export default ListUsers;
