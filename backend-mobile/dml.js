const dml = pool => {
  return {
    insertUserInfo: async (req, res) => {
      try {
        if (!req.body || typeof req.body !== "object") return;
        let insert_query = `INSERT INTO churchbook.user_info (`;
        let key_data = "";
        let value_data = "";
        for (const key in req.body) {
          key_data += `,${key}\n`;
        }
        insert_query += key_data.substring(1, key_data.length);
        insert_query += ") VALUES (";
        for (const key in req.body) {
          switch (typeof req.body[key]) {
            case "number":
              value_data += `,${req.body[key]}`;
              break;
            case "string":
              value_data += `,'${req.body[key]}'`;
              break;
          }
        }
        insert_query += value_data.substring(1, value_data.length);
        insert_query += ") RETURNING u_email";
        const { rows } = await pool.query(insert_query);
        res.json(rows[0].u_email);
      } catch (error) {
        res.json(error.error);
        console.log(error);
      }
    },
    updateUserInfo: async (req, res) => {
      try {
        if (!req.body || typeof req.body !== "object") return;
        let $data = "";
        for (let i in req.body) {
          if (i !== "id") {
            $data += `,${i} = '${req.body[i]}'`;
          }
          if (i === "u_withdraw" && req.body[i] === "Y") {
            $data += `,u_withdraw_date = now()`;
          }
        }
        const update_query = `
            UPDATE churchbook.user_info SET
                u_update_date = now() 
                ${$data}
            WHERE id = ${req.body.id}
            RETURNING u_email
        `;
        const { rows } = await pool.query(update_query);
        res.json(rows[0].u_email);
      } catch (error) {
        console.log(error);
      }
    },
    confirmUserInfo: async (req, res) => {
      try {
        const { u_email, u_password } = req.body;
        let user_confirm = `SELECT * FROM CHURCHBOOK.USER_INFO WHERE U_EMAIL = $1 AND u_password = $2`;
        const { rows } = await pool.query(user_confirm, [u_email, u_password]);
        if (rows.length === 1) {
          res.json({ result: true, user_info: rows[0] });
        } else {
          res.json({
            result: false,
            msg: "이메일 또는 비밀번호가 맞지 않습니다."
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};

module.exports = dml;
