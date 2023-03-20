import Context from '../models/Context';
import Domain from '../models/Domain';
import Country from '../models/Country';
import City from '../models/City';
import Descriptor from '../models/Descriptor';
import Provider from '../models/Provider';
import Item from '../models/Item';
import { parse } from 'dotenv';

module.exports.search = async function(req,res){
    const {domain,country,city,action,core_version,bap_id,bap_uri,transaction_id,message_id,timestamp,key,ttl,weight,length,breadth,height,category,minPrice,maxPrice,dangerous_goods} = req.body;
    if(!domain||!country||!city||!action||!core_version||!bap_id||!bap_uri||!transaction_id||!message_id||!timestamp||!key||!ttl||!weight||!length||!breadth||!height||!category||!minPrice||!maxPrice||!dangerous_goods){
        return res.status(400).json({
            "message":{
                "ack":{
                    "status":"NACK"
                },
                "response":{
                    "data":[]
                }
            },
            "error":{
                // TODO : Give properties to code & path
                "type":"CONTEXT-ERROR",
                "code":"Error code will be displayed here.",
                "path":"Path will be displayed here.",
                "message":"All fields are required"
            }
        });
    }
    let bpp_id = "http://localhost:8000";
    // TODO : Change the bpp_uri
    let bpp_uri = "http://localhost:8000";

    // TODO: Populate the Fulfillment_id field
    let items = await Item.find({})
    .populate({
        path:'Descriptor',
        populate:[{
            path:'Image'
        }]
    })
    .populate({
        path:'Price',
        populate:[
            {
                path:'value'
            },
            {
                path:'estimated_value'
            },
            {
                path:'computed_value'
            },
            {
                path:'listed_value'
            },
            {
                path:'offered_value'
            },
            {
                path:'minimum_value'
            },
            {
                path:'maximum_value'
            }
        ]
    })
    .populate({
        path:'category_id',
        populate:[
            {
                path:'descriptor',
                populate:[
                    {
                        path:'images'
                    }
                ]
            },
            {
                path:'time',
                populate:[
                    {
                        path:'duration'
                    },
                    {
                        path:'schedule',
                        populate:[
                            {
                                path:'frequency'
                            }
                        ]
                    }
                ]
            },
            {
                path:'tags'
            }
        ]
    })
    .populate({
        path:"fulfillment_id",
        populate:[

        ]
    })
    .populate({
        path:'rating',
        populate:[
            {
                path:"FeedbackUrl"
            },
            {
                path:'FeedbackForm',
                populate:[
                    {
                        path:'FeedbackFormElement'
                    }
                ]
            }
        ]
    })
    .populate({
        path:'location_id',
        populate:[
            {
                path:'descriptor',
                populate:[
                    {
                        path:'images'
                    }
                ]
            },
            {
                path:'gps'
            },
            {
                path:'address'
            },
            {
                path:'city'
            },
            {
                path:'country'
            }
            ,{
                path:'circle',
                populate:[
                    {
                        path:'gps'
                    },
                    {
                        path:'radius'
                    }
                ]
            },
            {
                path:'time',
                populate:[
                    {
                        path:'duration'
                    },
                    {
                        path:'schedule',
                        populate:[
                            {
                                path:'frequency'
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .populate({
        path:'time',
        populate:[
            {
                path:'duration'
            },
            {
                path:'schedule',
                populate:[
                    {
                        path:'frequency'
                    }
                ]
            }
        ]
    })
    .populate({
        path:'rateable'
    })
    .populate({
        path:'tags'
    })
    .populate({
        path:'weight'
    })
    .populate({
        path:'dimensions',
        populate:[
            {
                path:'length'
            },
            {
                path:'breadth'
            },
            {
                path:'height'
            }
        ]
    });

    let queryWeight,queryLength,queryBreadth,queryHeight,queryMinPrice,queryMaxPrice,queryDangerousGoods;
    queryWeight = parseInt(weight);
    queryHeight = parseInt(height);
    queryBreadth = parseInt(breadth);
    queryLength = parseInt(length);
    queryMinPrice = parseInt(minPrice);
    queryMaxPrice = parseInt(maxPrice);
    queryDangerousGoods = (String(queryDangerousGoods).toLowerCase()==="true");
    queryCategory = String(category).toLowerCase();
    let searchResults = [];
    for (let item in items){
        let condition1=false,condition2=false;
        if(item.weight<=queryWeight&&item.dimensions.length<=queryLength&&item.dimensions.breadth<=queryBreadth&&
           item.dimensions.height<=queryHeight&&item.price.minimum_value<=queryMinPrice&&item.price.maximum_value>=queryMaxPrice&&
           item.dangerous_goods===queryDangerousGoods){
                condition1 = true;
        }

        for(let tag in item.tags){
            let currTag = String(tag).toLowerCase();
            if(currTag===queryCategory){
                condition2 = true;
            }
        }

        if(condition1||condition2){
            searchResults.push(item);
        }
    }
    return res.status(200).json({
        "message": {
            "ack": {
              "status": "ACK"
            },
            "response":{
                "data":searchResults
            }
          },
          "error": {
            "type": "NA",
            "code": "NA",
            "path": "NA",
            "message": "Successfully fetched Data"
          }
    })
}