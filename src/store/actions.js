const addstg = (stg) => ({
    type: 'adding',
    payload: stg
  });
  
  const remove = (id) => ({
    type: 'removing',
    payload: id
  });
  
  const updstg = (id, updstg) => ({
    type: 'updating',
    payload: { id, updstg }
  });
 
  
  export { addstg, updstg, remove };
  
