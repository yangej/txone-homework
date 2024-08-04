export const queryKeyFactory = (entity: string) => {
  const result = {
    lists: () => [entity, 'list'] as const,
    list: (filters: string) => [...result.lists(), { filters }] as const,
    details: () => [entity, 'detail'] as const,
    detail: (id: number) => [...result.details(), id] as const,
  };

  return result;
};
