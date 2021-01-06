

class ShipmentsCSS
{
    selectthirdorder()
    {
        return "a[href='/Admin/Order/ShipmentDetails/3']"
    }

    selecttrackingnumber()
    {
       return '#TrackingNumber'
    }

    settrackingnumber()
    {
        return "Set tracking number"
    }

    searchtrackingnumber()
    {
        return "[name='TrackingNumber']"
    }

    searchbutton()
    {
        return '#search-shipments'
    }

    verifysingleelement()
    {
        return '.dataTables_info'
    }
}
export default ShipmentsCSS