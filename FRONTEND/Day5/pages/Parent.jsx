import React, { useState } from 'react';
import Add_Gift from './Add_Gift';
import ShowDetailsPage from './Show_details';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Gift App</h1>
      <Add_Gift onFormSubmit={handleFormSubmit} />
      {formData && <ShowDetailsPage formData={formData} />}
    </div>
  );
};

export default App;
