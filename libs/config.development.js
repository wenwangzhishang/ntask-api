/**
 * Created by M.C on 2017/9/15.
 */

module.exports = {
    database: "ntask",
    username: "machao",
    password: "123456",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }
    },
    jwtSecret: "NNNTTTAAA#$$$KKKK-AAPPII",
    jwtSession: {session: false}
};