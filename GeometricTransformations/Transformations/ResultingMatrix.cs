namespace GeometricTransformations.Transformations;

public class ResultingMatrix
{
    private readonly List<ITransformation> _transformations;

    public ResultingMatrix(List<ITransformation> transformations)
	{
        _transformations = transformations ?? throw new ArgumentNullException(nameof(transformations));
    }

    private void ThrowIfNoTransformation()
    {
        if (!_transformations.Any())
        {
            var message = "No transformation to generate the resulting matrix";
            throw new InvalidOperationException(message);
        }
    }

    private static double[,] GetMatrixFromTransformationOrThrow(ITransformation? operation)
    {
        var matrix = operation?.ToMatrix();

        if (matrix is null)
        {
            var message = "A transformation generated a null matrix";
            throw new InvalidOperationException(message);
        }

        return matrix;
    }

    private ITransformation? GetNextTransformation()
    {
        var transformation = _transformations.TakeLast(1).FirstOrDefault();

        if (transformation is not null)
        {
            _transformations.Remove(transformation);
        }

        return transformation;
    }

    private static double[,]? MultiplyMatrices(double[,]? resultingMatrix, double[,]? newMatrix)
    {
        if (resultingMatrix is null || newMatrix is null)
        {
            return resultingMatrix;
        }

        return Matrices.Multiply(resultingMatrix, newMatrix);
    }

    public double[,]? Calculate()
    {
        ThrowIfNoTransformation();

        var nextTransformation = GetNextTransformation();

        var resultingMatrix = GetMatrixFromTransformationOrThrow(nextTransformation);

        while (_transformations.Any())
        {
            nextTransformation = GetNextTransformation();

            if (nextTransformation is null) break;

            var nextTransformationMatrix = GetMatrixFromTransformationOrThrow(nextTransformation);

            resultingMatrix = MultiplyMatrices(resultingMatrix, nextTransformationMatrix);
        }

        return resultingMatrix;
    }
}
