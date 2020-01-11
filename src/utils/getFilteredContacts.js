const getFilteredContacts = (allContacts, filter) => {
  return allContacts.filter(item =>
    item.name.toUpperCase().includes(filter.toUpperCase()),
  );
};

export default getFilteredContacts;
