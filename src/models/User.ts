import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"

@Entity()
export class User{

    constructor(){
        this._id = 0;
        this.name = "";
        this.email = "";
        this.created_on = Date.now();
    }

    @PrimaryColumn()
    _id: number

    @Column("text")
    name: string

    @Column("text", {
        unique: true,
        nullable: false
    })
    email: string

    @CreateDateColumn({
        default: Date.now()
    })
    created_on: number
}