import { createContext } from 'react';
import { Student } from '../models/Student';

type StudentContextType = {
    students: Student[];
    addStudent: (name: string) => void;
};

export const StudentContext = createContext<StudentContextType>(
    {} as StudentContextType
);

