const CompanyOpportunities = () => {

  const companies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Adobe"
  ];

  return (
    <div style={{
      background:"#1f2937",
      padding:"20px",
      borderRadius:"10px",
      color:"white"
    }}>
      <h3>Companies Yet to Apply</h3>

      <ul>
        {companies.map((company,index)=>(
          <li key={index}>{company}</li>
        ))}
      </ul>

    </div>
  );
};

export default CompanyOpportunities;