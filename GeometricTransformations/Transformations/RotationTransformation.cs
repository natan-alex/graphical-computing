namespace GeometricTransformations.Transformations;

public class RotationTransformation : ITransformation
{
    private readonly int _degrees;
    
    public RotationTransformation(int degrees)
    {
        _degrees = degrees;
    }

    public double[,] GenerateZAxisRotationMatrix()
    {
        var (sin, cos) = Math.SinCos(_degrees);
        
        return new double[,] {
            { cos, sin * -1, 0 },
            { sin, cos, 0 },
            { 0, 0, 1 },
        };
    }

    public double[,] ToMatrix()
    {
        return GenerateZAxisRotationMatrix();
    }
}
