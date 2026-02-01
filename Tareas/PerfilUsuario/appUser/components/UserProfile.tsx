import { View } from 'react-native';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

type User = {
    nombre: string;
    edad: number;
    ciudad: string;
    ocupacion: string;
};

type Props = {
    user: User;
};

export default function UserProfile({ user }: Props) {
    return (
    <View style={{ marginBottom: 20 }}>
        <UserHeader 
            nombre={user.nombre} 
            ocupacion={user.ocupacion} 
        />
        <UserDetails 
            edad={user.edad} 
            ciudad={user.ciudad} 
        />
    </View>
    );
}
