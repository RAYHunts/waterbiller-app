import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Card } from "@/src/components/ui/card";
import { HStack } from "@/src/components/ui/hstack";
import { VStack } from "@/src/components/ui/vstack";
import { supabase } from "@/src/utils/supabase";
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
      <Card>
        <VStack>
          {users?.map((user) => (
            <View key={user.id}>
              <HStack className="flex items-center justify-center gap-4">
                <Avatar size="lg">
                  <AvatarImage source={{ uri: user.avatar_url }} />
                </Avatar>
                <Text>{user.id}</Text>
                <Text>{user.first_name}</Text>
                <Text>{user.last_name}</Text>
              </HStack>
            </View>
          ))}
        </VStack>
      </Card>
    </View>
  );
};

export default ListUsers;
