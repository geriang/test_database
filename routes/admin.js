const express = require('express');
// const { createAgentRegistrationForm } = require('../../forms/agent/agentRegister');
// const { createUserRegistrationForm } = require('../../forms/user/userRegister');
const router = express.Router();
// const AgentService = require('../../services/agentService')
// const UserService = require('../../services/userService')
// const AgentSvc = new AgentService();
// const UserSvc = new UserService()

// const agentRegisterForm = createAgentRegistrationForm()
// const userRegistrationForm = createUserRegistrationForm()

// router.get('/product', async (req, res) => {
//     try{
//         const agentsRecords = await AgentSvc.displayAllAgents()
//         res.render('agent/agent', {agentsRecords})
//     }catch(error){
//         console.log(error)
//         res.status(500).send("Error Retriving Agents")
//     }
   
// });


router.get('/agent/register', (req, res) => {
    res.render('agent/agentRegister', {
        form: agentRegisterForm.toHTML()

    })
});

router.post('/agent/register', (req, res) => {
    agentRegisterForm.handle(req, {
        success: async (form) => {
            try {
                const checkExistingAgent = await AgentSvc.verifyUserByCeaNo(form.data.ceaNumber)
                if (checkExistingAgent) {
                    req.flash("error", "Agent already exists")
                    req.session.save(() => {
                        res.redirect("/admin/agent")
                    });

                } else {
                    await AgentSvc.createNewAgent(form.data.ceaNumber, form.data.mobileNumber, form.data.email, form.data.password, form.data.firstName, form.data.lastName);
                    req.flash("success", "User signed up successfully");
                    req.session.save(() => {
                        res.redirect("/admin/agent")
                    });
                }
            } catch (error) {
                console.error(error)
            }

        }
    })
})

router.get('/user', async (req, res) => {
    try{
        const usersRecords = await UserSvc.displayAllUsers()
        console.log(usersRecords)
        res.render('user/user', {usersRecords})
    }catch(error){
        console.log(error)
        res.status(500).send("Error Retriving Users")
    }
});


router.get('/user/register', (req, res) => {
    res.render('user/userRegister', {
        form: userRegistrationForm.toHTML()

    })
});


router.post('/user/register', (req, res) => {
    userRegistrationForm.handle(req, {
        success: async (form) => {
            const checkExistingUser = await UserSvc.verifyUserByEmail(form.data.email)
            if (checkExistingUser) {
                req.flash("error", "user already exists")
                req.session.save(() => {
                    res.redirect("/login")
                });

            } else {
                await UserSvc.createNewUser(form.data.username, form.data.password, form.data.email);
                req.flash("success", "User signed up successfully");
                req.session.save(() => {
                    res.redirect("/login")
                });
            }
        }
    })



})



module.exports = router

