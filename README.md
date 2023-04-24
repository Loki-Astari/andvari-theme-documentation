# andvari-theme-doc

A very simple documentation theme

This is based on the [slate tool](https://github.com/tripit/slate).  
I actually like the `slate` tool but I wanted all my documentation to be generated in the same way.



## Configuration

In the config.json file you will find the following options.

      {
        toc: [ >Content Item< ]
      }


Where:

    Content Item:
        Name:   >Name as it appears in menu<
        Value:  >A file to be displayed for that menu item< (Optional)
        Sub:    [ >Content Item< ]                          (Optional)

