import express from 'express'
import QueryPerson from '../model/contactUs.model.js';
export const createQuery = async (req , res) => {
    const query =  new QueryPerson(req.body);
    try {
        
        await query.save();
        res.status(201).json({message : "Your message has been sent successfully"});
        console.log(query);

    } catch (error) {
        console.log("Error in the query : ", error);
        return res.status(500).json({
            message : "query doesn't add successfully in db"
        })
    }
}