import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Points } from './Points';

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Points, points => points.user)
    points: Points[];
}
