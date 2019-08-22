const dml = pool => {
  return {
    insertUserInfo: async (req, res) => {
      try {
        const {
          u_email,
          u_password,
          u_name,
          u_age,
          u_nickname,
          u_address,
          u_phone,
          u_photo_url
        } = req.body;
        const insert_data = Object.values(req.body);
        let $data = "";
        for (let i in insert_data) {
          $data += `$${++i},`;
        }
        const insert_query = `INSERT INTO churchbook.user_info (
            ${u_email ? "u_email" : ""}
            ${u_password ? ", u_password" : ""}
            ${u_name ? ", u_name" : ""}
            ${u_age ? ", u_age" : ""}
            ${u_nickname ? ", u_nickname" : ""}
            ${u_address ? ", u_address" : ""}
            ${u_phone ? ", u_phone" : ""}
            ${u_photo_url ? ", u_photo_url" : ""}
          ) VALUES (
            ${$data.substring(0, $data.length - 1)}
          ) RETURNING u_email, u_name`;
        const { rows } = await pool.query(insert_query, insert_data);
        res.json(rows);
      } catch (error) {
        console.log(error);
      } finally {
        pool.end();
      }
    },
    updateUserInfo: async (req, res) => {
      try {
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
            RETURNING u_email, u_name
        `;
        const { rows } = await pool.query(update_query);
        res.json(rows);
      } catch (error) {
        console.log(error);
      } finally {
        pool.end();
      }
    },
    selectUserInfo: async (req, res) => {
      const { u_email, u_password } = req.body;
      try {
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
      } finally {
        pool.end();
      }
    }
  };
};

module.exports = dml;
