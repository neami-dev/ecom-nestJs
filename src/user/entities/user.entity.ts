import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import  { hash } from 'bcrypt';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string; 

    @Column()
    password: string;

    @Column({ nullable: true })
    name: string;


    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10); 
    }


}
