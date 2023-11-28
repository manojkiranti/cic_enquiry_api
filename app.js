const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/getInquiry", (req, res) => {
  res.json({
    Status: 200,
    Message: "Success",
    Data: [
      {
        EntityType: "Consumer",
        EntityName: "Semu Khan",
        Gender: "Male",
        DateOfBirthInBS: "2044-12-07",
        Nationality: "Nepali",
        FatherName: "Reyajul Kha",
        IdentifierType: "Citizenship Number",
        IdentifierNumber: "343045/42",
        IdentifierIssuedDateInBS: "2064-04-01",
        IdentifierIssuedDistrict: "Parsa",
        CompanyRegistrationNumberIssuedAuthority: "NA",
        Branch: "Birgunj",
        PurposeOfSeeking: "Renew",
        TypeOfCreditFacility: "Personal Loan (OD nature)",
        LoanAmount: "6900000",
        ItemID: "7833",
        ParentID: "2370",
        BranchFolderName: "22-Birgunj",
      },
    ],
  });
});

app.post("/updateInquiry", (req, res) => {
  res.json({
    Status: 200,
    Message: "Success",
  });
});

const server = app.listen(3000, () => {
  console.log(`Listening on port ${server.address().port}...`);
});
