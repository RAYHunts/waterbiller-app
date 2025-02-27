import { useAuth } from "@/context/auth-context";
import { getUserMeterDevice } from "@/libs/queries";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const MeterDeviceList = () => {
  const { profile } = useAuth();
  const [meterDevices, setMeterDevices] = useState<any[] | null>([]);

  useEffect(() => {
    // Fetch meter devices

    const fetchMeterDevices = async () => {
      const query = await getUserMeterDevice(profile.id as string);
      console.log(query);
      setMeterDevices(query);
    };

    fetchMeterDevices();
  }, []);

  return (
    <View>
      <Text>Meter Device List</Text>
      {meterDevices &&
        meterDevices.map((device) => (
          <Text key={device.id}>{device.name}</Text>
        ))}

      {meterDevices?.length === 0 && <Text>No meter devices found</Text>}
    </View>
  );
};

export default MeterDeviceList;
