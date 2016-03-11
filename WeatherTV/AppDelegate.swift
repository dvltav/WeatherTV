import TVMLKit
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
/*
    var window: UIWindow?
    var appController: TVApplicationController?
    static let TVBaseURL = "http://192.168.1.11:9001/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
       
        window = UIWindow(frame: UIScreen.mainScreen().bounds)
        let appControllerContext = TVApplicationControllerContext()
        guard let javaScriptURL = NSURL(string: AppDelegate.TVBootURL) else { fatalError("unable to create NSURL") }
       
        appControllerContext.javaScriptApplicationURL = javaScriptURL
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL
        
        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        return true
    }
    */
    
    //*********
    // We'll hold a reference to the app controller in an optional property
    var appController: TVApplicationController?
   var window: UIWindow?
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        window = UIWindow(frame:UIScreen.mainScreen().bounds)
        
        let appControllerContext = TVApplicationControllerContext()
        
        let jsFilePath = NSURL(string: "http://bigpi.local/tv/main.js")
        //let jsFilePath = NSURL(string: "http://localhost:9001/js/main.js")
        let javascriptURL = jsFilePath!
        
        appControllerContext.javaScriptApplicationURL = javascriptURL
        if let options = launchOptions
        {
            for (kind, value) in options
            {
                if let kindStr = kind as? String
                {
                    appControllerContext.launchOptions[kindStr] = value
                }
            }
        }
        
        self.appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)
        
        return true
    }
    
}

