const enrollment = {
    user: {
      id: 'string',
      name: 'string'
    },
    finished: 'boolean',
    path: 'boolean'
  }

  function flatten(unflatobject){
    const u = {unflatobject.user};
    for(let i in unflatobject){
      if(i !== 'user')u[i] = unflatobject[i];
    }
    return u;
  }

  const user = flatten(enrollment);
  console.log(user);
