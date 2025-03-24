from PIL import Image
import os
import sys

def convert_to_webp(input_path, output_path=None, quality=85):
    """
    Convert an image to WebP format
    
    Args:
        input_path (str): Path to the input image
        output_path (str, optional): Path for output WebP file
        quality (int): Quality setting (0-100, default 85)
    
    Returns:
        tuple: (success_status: bool, message: str)
    """
    try:
        # Check if input file exists
        if not os.path.exists(input_path):
            return False, f"Error: Input file '{input_path}' not found"

        # Open the image
        with Image.open(input_path) as img:
            # If no output path specified, create one from input path
            if output_path is None:
                output_path = os.path.splitext(input_path)[0] + ".webp"
            
            # Check if output directory exists, create if it doesn't
            output_dir = os.path.dirname(output_path)
            if output_dir and not os.path.exists(output_dir):
                os.makedirs(output_dir)
            
            # Convert image to RGB if it's in RGBA mode (WebP doesn't support alpha fully)
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # Save as WebP with specified quality
            img.save(output_path, 'WEBP', quality=quality)
            
            # Verify the output file was created
            if not os.path.exists(output_path):
                return False, "Error: Failed to create output file"
                
            return True, f"Success: Image converted to '{output_path}'"

    except ImportError:
        return False, "Error: PIL (Pillow) library not installed. Install it using 'pip install Pillow'"
    except Exception as e:
        return False, f"Error: {str(e)}"

def main():
    # Check if command line argument was provided
    if len(sys.argv) < 2:
        print("Usage: python script.py <input_image_path> [output_image_path]")
        print("Example: python script.py image.jpg output.webp")
        sys.exit(1)
    
    input_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    # Convert the image
    success, message = convert_to_webp(input_path, output_path)
    
    # Print result
    print(message)
    
    # Exit with appropriate status code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()