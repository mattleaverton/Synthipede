var walkSpeed = 8.0;
var sidestepSpeed = 8.0;
var gravity = 10.0;

// added for run (set to Fire2. Change in Project Settings / Input if different desired.)
var canRun = true;
var runSpeed = 14.0; // negative values here makes game unhappy
var runBackwardSpeed = 6.0; // negative values here makes game unhappy
// var runSpeedChange = 4.0; // negative values here makes game unhappy

var canRunSidestep = true;
var runSidestepSpeed = 12.0;

// added for keyboard rotation ('Horizontal' rotates instead of translates / strafe)
var rotateSpeed = 1.0;
var rotateInAir = false;
*/
private var grounded = false;
    if (grounded)
        // Calculate how fast we should rotate
        // var rotation = Input.GetAxis("Horizontal") * rotateSpeed;
        
        // Set 'Horizontal' input based on rotate variable
        /*var targetVelocity = (canRotate) ? new Vector3(0, rotation, Input.GetAxis("Vertical")) 
        : new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));*/
        
        // Calculate how fast we should be moving
        targetVelocity = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        targetVelocity = transform.TransformDirection(targetVelocity);
        {
            targetVelocity.x *= (canRun && Input.GetButton("Fire2")) ? runSpeed : walkSpeed;
        else 
        { 
            targetVelocity.x *= (canRun && Input.GetButton("Fire2")) ? runBackwardSpeed : walkBackwardSpeed;

        targetVelocity.z *= (canRunSidestep && Input.GetButton("Fire2")) ? runSidestepSpeed : sidestepSpeed;
        
        // Rotate if rotate is enabled
        /*if (canRotate)
        {
            transform.Rotate(0, rotation, 0);
        }
        */
        
        // Apply a force that attempts to reach our target velocity
    else
        // Add in air
        
        // Calculate how fast we should rotate
        /*rotation = Input.GetAxis("Horizontal") * rotateSpeed;
        
        // Set 'Horizontal' input behavior based on whether we can rotate in air
        targetVelocity = (rotateInAir) ? new Vector3(0, rotation, Input.GetAxis("Vertical"))
        : new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        */    
        targetVelocity = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        targetVelocity = transform.TransformDirection(targetVelocity) * inAirControl;
        
        // Rotate if rotate in air is enabled.
        /*if (rotateInAir)
        {
            transform.Rotate(0, rotation, 0);
        }
        */
{
   {
      {
{