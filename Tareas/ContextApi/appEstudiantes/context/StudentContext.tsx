import { createContext, useState, useEffect, ReactNode } from 'react';

type Student = {
    id: string;
    name: string;
};

type StudentContextType = {
    students: Student[];
    addStudent: (name: string) => void;
};

export const StudentContext = createContext<StudentContextType>(
    {} as StudentContextType
);

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

  // Simula datos externos después de 5 segundos
    useEffect(() => {
        setTimeout(() => {
            setStudents(prev => [
            ...prev,
            { id: '11', name: 'Estudiante Nuevo (API)' }
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
