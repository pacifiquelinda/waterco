import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Payment = sequelize.define('payments', {
    PaymentId:{
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    PaymentModel:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Remaining:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Bill_Paid:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
},{
    sequelize, 
    tablename: "payments",
    timestamp: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            {name: "PaymentId"}
        ]
    }]    
})

export default Payment;
