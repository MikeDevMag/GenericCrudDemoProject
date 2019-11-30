using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nugGenericCrud;

namespace GenericCrudDemoProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [DisableCors]
    public class GenericController : ControllerBase
    {

        private readonly AppDbContext _context;
        public GenericController(AppDbContext context)
        {
            _context = context;

        }

        // GET: api/Generic
        [HttpGet]
        public dynamic getItems(string entName)
        {
            var gen = new GenericService(this._context);
            var ent = gen.GetAllItems(entName).Result;

            return ent;

        }

        [HttpPost]
        public dynamic getItemsSQL(APISend data)
        {
            var gen = new GenericService(this._context);
            var ent = gen.GetItemsSQL(data);

            return ent;

        }

        [HttpPost]
        public dynamic updateItem(APISendSave data)
        {

            var gen = new GenericService(this._context);
            var ent = gen.UpdateItem(data);
            return ent;

        }
        [HttpPost]
        public dynamic deleteItem(APISendSave data)
        {
            var gen = new GenericService(this._context);
            var ret = gen.DeleteItem(data);
            return ret;

        }

    }
}