import { dalUsers } from "../dal/user.dal.js";

export const getUsersCtrl = async (req, res) => {
    try {
        res.json(await dalUsers.getUsers())
    } catch (err) {
        res.status(400).json({ error: `from get all Users Ctrl ${err.message}`})
    } 
}

export const getUserCtrl = async (req, res) => {
    const username = String(req.params.username);
    if (!username) return res.status(400).json({ error: 'Missing username' });
    try {
        res.json(await dalUsers.getUserByUsername(username))
    } catch (err) {
        res.status(400).json({ error: `from get User Ctrl ${err.message}` })
    }
}

export const createNewUserCtrl = async (req, res) => {
    console.log(req.body);
    console.log(req);
    try {
        await dalUsers.insertNewUser({ ...req.body });
        res.status(201).json({createUser: {...req.body} });
    } catch (err) {
        res.status(400).json({ error: `from create new User Ctrl ${err.message}` });
    }
}