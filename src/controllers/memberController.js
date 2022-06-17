const memberService = require("../services/memberService");

//get the specific member
const getMember = (req, res) => {
  try {
    // get the member id from the url
    const {
      params: { memberId },
    } = req;
    //if the member id is not valid, return an error
    if (!memberId) {
      return res
        .status(400)
        .send({ status: "ERROR", message: "Invalid member id" });
    }
    const member = memberService.getMember(memberId);
    res.send({ status: "OK", data: member });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
};

module.exports = {
  getMember,
};
