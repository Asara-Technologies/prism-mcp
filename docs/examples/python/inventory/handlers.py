def echo(params, context):
    context.log("inventory_py_echo invoked")
    item_id = params["item_id"]
    return {
        "item_id": item_id,
        "normalized": item_id.lower(),
    }
