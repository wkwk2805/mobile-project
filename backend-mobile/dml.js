const dml = pool => {
  return {
    insertUserInfo: async (req, res) => {
      req.body = { u_email: "1234", u_password: "12345" };
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
        req.body = {
          u_email: "wkwk2805",
          u_password: "12345",
          id: 1,
          u_withdraw: "Y"
        };
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
    }
  };
};

module.exports = dml;
