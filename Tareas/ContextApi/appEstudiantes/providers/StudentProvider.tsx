import { ReactNode, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Student } from '../models/Student';

type Props = {
    children: ReactNode;
};

export function StudentProvider({ children }: Props) {
    const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Ana' },
    { id: '5', name: 'Luis' },
    { id: '6', name: 'Pedro' },
    { id: '7', name: 'Sofía' },
    { id: '8', name: 'Miguel' },
    { id: '9', name: 'Lucía' },
    { id: '10', name: 'Andrés' }
    ]);

    useEffect(() => {
    setTimeout(() => {
        setStudents(prev => [
        ...prev,
        { id: Date.now().toString(), name: 'Estudiante API' }
        ]);
    }, 5000);
    }, []);

    const addStudent = (name: string) => {
    setStudents(prev => [
        ...prev,
        { id: Date.now().toString(), name }
    ]);
    };

    return (
    <StudentContext.Provider value={{ students, addStudent }}>
        {children}
    </StudentContext.Provider>
    );
}
