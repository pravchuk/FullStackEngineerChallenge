export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  // this.get('/employees');
  this.get('/employees', (schema, request) => {
    let { queryParams } = request;
    if ( queryParams) {
      let employeeFromRecord = schema.db.employees;
      let json = {};
      if ( employeeFromRecord ) {
        if(queryParams.name){
          let { name } = queryParams;
          json.employees = employeeFromRecord.where({ name: name });
          return json;
        }
        if(queryParams.username && queryParams.password){
          let { username, password } = queryParams;
          json.employees = employeeFromRecord.where({ username: username , password: password});
          return json;
        }
      }
    }
    return {
      "employees":schema.db.employees.where(x => true)
    }
  });

  this.post('/employees', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).employee;
    return schema.employees.create(attrs);
  });

  this.get('/employees/:id', (schema, request) => {
    let id = request.params.id;
    return schema.employees.find(id);
  });

  this.del('/employees/:id', (schema, request) => {
    let id = request.params.id;
    let employee = schema.employees.remove(id);
  });

  this.put('/employees/:id', (schema, request) => {
    let id = request.params.id;
    let employeeJson = JSON.parse(request.requestBody).employee;
    return schema.db.employees.update(id, employeeJson);
  })

  this.get('/reviews', (schema,request) => {
    let { queryParams } = request;
    if ( queryParams && queryParams.employee) {
      let reviewFromRecord = schema.db.reviews;
      let json = {};
      if ( reviewFromRecord ) {
        let { employee } = queryParams;
        json.reviews = reviewFromRecord.where({ 'employee_id': employee });
        return json;
      }
    }
    return {
      "reviews": schema.db.reviews.all()
    }
  });

  this.get('/reviews/:id', (schema, request) => {
    let id = request.params.id;
    let review = schema.db.reviews.find(id);
    return review;
  });

  this.post('/reviews', (schema, request) => {
    let review = JSON.parse(request.requestBody);
    let res = {
      "review" : schema.db.reviews.insert(review.review)
    }
    return res
  });

  // this.del('/employees/:id', (schema, request) => {
  //   let id = request.params.id;
  //   let employee = schema.employees.remove(id);
  // });

  // this.update('/employees/:id', (schema, request) => {
  //   let id = request.params.id;
  //   let employee = schema.employees.remove(id);
  // });

  // this.put('/employees/:id', (schema, request) => {
  //   let employee = schema.db.employees.find(request.params.id);
  //   employee.update(JSON.parse(request.requestBody));
  //   return {};
  // })
}
